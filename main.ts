import {
    App,
    debounce,
    MarkdownPostProcessorContext,
    Notice,
    Plugin,
    PluginSettingTab,
    request,
    Setting
} from 'obsidian';

import * as plantuml from 'plantuml-encoder'

const SECONDS_TO_MS_FACTOR = 1000;

interface PlantUMLSettings {
    server_url: string,
    header: string;
    debounce: number;
}

const DEFAULT_SETTINGS: PlantUMLSettings = {
    server_url: 'https://www.plantuml.com/plantuml',
    header: '',
    debounce: 10,
}

export default class PlantumlPlugin extends Plugin {
    settings: PlantUMLSettings;

    imageProcessor = async (source: string, el: HTMLElement, _ : MarkdownPostProcessorContext) : Promise<void> => {

        //make sure url is defined, once the setting gets reset to default, an empty string will be returned by settings
        let url = this.settings.server_url;
        if (url.length == 0) {
            url = DEFAULT_SETTINGS.server_url;
        }

        const imageUrlBase = url + "/png/";

        //replace all non breaking spaces with actual spaces
        source = source.replace(/&nbsp;/gi, " ");

        const encodedDiagram = plantuml.encode(this.settings.header + "\r\n" + source);

        console.log("loading diagram from: " + imageUrlBase + encodedDiagram);

        const img = document.createElement("img");
        img.src = imageUrlBase + encodedDiagram;
        img.useMap = "#" + encodedDiagram;


        //get image map data to support clicking links in diagrams
        const mapUrlBase = url + "/map/";
        request({url: mapUrlBase + encodedDiagram, method: "GET"}).then((value) => {
            el.innerHTML = value;
            el.children[0].setAttr("name", encodedDiagram);
        }).catch((error) => {
            console.error(error);
        }).finally(() => {
            el.appendChild(img);
        });
    }

    asciiProcessor = async (source: string, el: HTMLElement, _: MarkdownPostProcessorContext): Promise<void> => {

        //make sure url is defined, once the setting gets reset to default, an empty string will be returned by settings
        let url = this.settings.server_url;
        if(url.length == 0) {
            url = DEFAULT_SETTINGS.server_url;
        }
        const asciiUrlBase = url + "/txt/";
        //replace all non breaking spaces with actual spaces
        source = source.replace(/&nbsp;/gi, " ");

        const encodedDiagram = plantuml.encode(this.settings.header + "\r\n" + source);

        const result = await request({url: asciiUrlBase + encodedDiagram});

        const pre = document.createElement("pre");
        const code = document.createElement("code");
        pre.appendChild(code);
        code.setText(result);
        el.appendChild(pre);
    };

    async onload(): Promise<void> {
        console.log('loading plugin plantuml');
        await this.loadSettings();
        this.addSettingTab(new PlantUMLSettingsTab(this.app, this));

        this.updateDebounceTimer();
    }

    //make sure the debounce timer is updated on every settings change
    updateDebounceTimer() : void {
        let debounceTime = this.settings.debounce;
        console.log("debounce time set to " + debounceTime + " seconds");
        debounceTime = debounceTime * SECONDS_TO_MS_FACTOR;

        const imageProcessorDebounce = debounce(this.imageProcessor, debounceTime, true);
        const asciiProcessorDebounce = debounce(this.asciiProcessor, debounceTime, true);

        this.registerMarkdownCodeBlockProcessor("plantuml", imageProcessorDebounce);
        this.registerMarkdownCodeBlockProcessor("plantuml-ascii", asciiProcessorDebounce);

        //keep this processor for backwards compatibility
        this.registerMarkdownCodeBlockProcessor("plantuml-map", imageProcessorDebounce);
    }

    onunload(): void {
        console.log('unloading plugin plantuml');
    }

    async loadSettings(): Promise<void> {
        this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
    }

    async saveSettings(): Promise<void> {
        await this.saveData(this.settings);
    }
}

class PlantUMLSettingsTab extends PluginSettingTab {
    plugin: PlantumlPlugin;

    constructor(app: App, plugin: PlantumlPlugin) {
        super(app, plugin);
        this.plugin = plugin;
    }

    display(): void {
        const {containerEl} = this;

        containerEl.empty();

        new Setting(containerEl).setName("Server URL")
            .setDesc("PlantUML Server URL")
            .addText(text => text.setPlaceholder(DEFAULT_SETTINGS.server_url)
                .setValue(this.plugin.settings.server_url)
                .onChange(async (value) => {
                        this.plugin.settings.server_url = value;
                        await this.plugin.saveSettings();
                    }
                )
            );
        new Setting(containerEl).setName("Header")
            .setDesc("Included at the head in every diagram. Useful for specifying a common theme (.puml file)")
            .addTextArea(text => {
                    text.setPlaceholder("!include https://raw.githubusercontent.com/....puml\n")
                        .setValue(this.plugin.settings.header)
                        .onChange(async (value) => {
                                this.plugin.settings.header = value;
                                await this.plugin.saveSettings();
                            }
                        )
                    text.inputEl.setAttr("rows", 4);
                    text.inputEl.addClass("settings_area")
                }
            );
        new Setting(containerEl).setName("Debounce")
            .setDesc("How often should the diagram refresh in seconds")
            .addText(text => text.setPlaceholder(String(DEFAULT_SETTINGS.debounce))
                .setValue(String(this.plugin.settings.debounce))
                .onChange(async (value) => {

                    //make sure that there is always some value defined, or reset to default
                    if(!isNaN(Number(value)) || value === undefined) {
                        this.plugin.settings.debounce = Number(value || DEFAULT_SETTINGS.debounce);
                        await this.plugin.saveSettings();
                        this.plugin.updateDebounceTimer();
                    }else {
                        new Notice("Please specify a valid number");
                    }

                }));
    }
}
