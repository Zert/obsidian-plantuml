import compareVersions from "compare-versions";

export const LOGO_SVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" role=\"img\" width=\"100\" height=\"100\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 32 32\"><defs><linearGradient id=\"svgIDc\" x1=\"-33.423\" x2=\"-33.353\" y1=\"-250.911\" y2=\"-250.858\" gradientTransform=\"matrix(37.134 26.001 13.575 -19.387 4673.473 -3982.019)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#767676\"/><stop offset=\"1\"/></linearGradient><linearGradient id=\"svgIDa\" x1=\"-32.107\" x2=\"-32.028\" y1=\"-242.563\" y2=\"-242.586\" gradientTransform=\"matrix(81.081 56.774 17.306 -24.715 6804.021 -4149.644)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#0079b9\"/><stop offset=\"1\"/></linearGradient><linearGradient id=\"svgIDd\" x1=\"-33.282\" x2=\"-33.224\" y1=\"-243.423\" y2=\"-243.455\" gradientTransform=\"matrix(60.003 42.015 34.184 -48.82 10343.005 -10469.084)\" href=\"#svgIDa\"/><linearGradient id=\"svgIDb\" x1=\"12.356\" x2=\"14.011\" y1=\"26.268\" y2=\"26.268\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#595959\"/><stop offset=\".087\" stop-color=\"#6e6e6e\"/><stop offset=\".242\" stop-color=\"#8c8c8c\"/><stop offset=\".405\" stop-color=\"#a4a4a4\"/><stop offset=\".577\" stop-color=\"#b5b5b5\"/><stop offset=\".765\" stop-color=\"#bfbfbf\"/><stop offset=\"1\" stop-color=\"#c2c2c2\"/></linearGradient><linearGradient id=\"svgIDe\" x1=\"18.291\" x2=\"19.946\" y1=\"26.171\" y2=\"26.171\" href=\"#svgIDb\"/><linearGradient id=\"svgIDf\" x1=\"24.44\" x2=\"26.096\" y1=\"26.171\" y2=\"26.171\" href=\"#svgIDb\"/></defs><path fill=\"#1c0a42\" d=\"m20.305 17.872l6.855 4.546l-5.44 3.075l-6.859-4.494l5.444-3.127z\"/><path d=\"m21.716 25.619l-.055-.036l-7.005-4.59l5.653-3.247l7.056 4.68Zm-6.65-4.613l6.658 4.362l5.231-2.957L20.3 18Z\"/><path fill=\"url(#svgIDc)\" d=\"m26.401 11.909l3.017 1.683l-2.348 1.496l-2.857-1.841l2.188-1.338z\"/><path d=\"m27.069 15.215l-3.058-1.97l2.387-1.46l3.228 1.8Zm-2.654-1.966l2.655 1.711l2.138-1.36l-2.8-1.565Z\"/><path fill=\"#ffbd3f\" d=\"m14.498 17.807l6.856 4.547l-5.44 3.075l-6.859-4.494l5.443-3.128z\"/><path d=\"m15.91 25.554l-.055-.036l-7.005-4.589l5.65-3.248l7.056 4.68Zm-6.65-4.613l6.658 4.359l5.231-2.957l-6.654-4.413Z\"/><path fill=\"#a11f40\" d=\"m7.99 17.966l6.964 4.4l-5.377 3.138l-7.359-4.655l5.772-2.883z\"/><path d=\"M9.575 25.629L2 20.838l6-3l7.164 4.527ZM2.436 20.86l7.144 4.518l5.168-3.016l-6.764-4.273Z\"/><path fill=\"url(#svgIDa)\" d=\"m2.111 21.021l7.332 4.494v3.548l-7.332-4.731v-3.311z\"/><path d=\"M9.55 29.26L2 24.391v-3.562l7.55 4.626Zm-7.332-4.986l7.118 4.592v-3.291l-7.118-4.362Z\"/><path fill=\"url(#svgIDd)\" d=\"m24.071 13.343l2.938 1.879v6.909l-2.938-1.884v-6.904z\"/><path d=\"m27.063 22.229l-3.045-1.953v-7.031l3.045 1.947Zm-2.938-2.012l2.831 1.815v-6.781l-2.831-1.81Z\"/><path fill=\"#fff\" d=\"M27.149 22.526v-7.332l2.365-1.419v15.374H9.646v-3.548l5.44-3.075l.699 3.075h.011l5.676-3.075l.419 3.075h.054l5.204-3.075z\"/><path d=\"M29.621 29.256H9.539v-3.718l5.62-3.177l.7 3.083l5.7-3.087l.422 3.1l5.061-2.991v-7.333l2.58-1.548Zm-19.868-.215h19.654V13.964l-2.151 1.29v7.332l-.053.031l-5.229 3.09H21.8l-.411-3.014l-5.564 3.014H15.7l-.686-3.018l-5.26 2.973Z\"/><rect width=\"1.656\" height=\"1.656\" x=\"12.356\" y=\"25.44\" fill=\"url(#svgIDb)\" rx=\".215\" ry=\".215\"/><path d=\"M13.8 27.2h-1.23a.322.322 0 0 1-.322-.322v-1.223a.322.322 0 0 1 .322-.322h1.23a.322.322 0 0 1 .322.322v1.226a.322.322 0 0 1-.322.319Zm-1.23-1.653a.108.108 0 0 0-.107.107v1.226a.108.108 0 0 0 .107.107h1.23a.108.108 0 0 0 .107-.107v-1.225a.108.108 0 0 0-.107-.107Z\"/><rect width=\"1.656\" height=\"1.656\" x=\"18.291\" y=\"25.343\" fill=\"url(#svgIDe)\" rx=\".215\" ry=\".215\"/><path d=\"M19.732 27.106h-1.227a.322.322 0 0 1-.322-.322v-1.226a.322.322 0 0 1 .322-.322h1.226a.322.322 0 0 1 .322.322v1.226a.322.322 0 0 1-.321.322Zm-1.226-1.656a.108.108 0 0 0-.107.107v1.226a.108.108 0 0 0 .107.107h1.226a.108.108 0 0 0 .107-.107v-1.225a.108.108 0 0 0-.107-.107Z\"/><rect width=\"1.656\" height=\"1.656\" x=\"24.44\" y=\"25.343\" fill=\"url(#svgIDf)\" rx=\".215\" ry=\".215\"/><path d=\"M25.881 27.106h-1.226a.322.322 0 0 1-.322-.322v-1.226a.322.322 0 0 1 .322-.322h1.226a.322.322 0 0 1 .322.322v1.226a.322.322 0 0 1-.322.322Zm-1.226-1.656a.108.108 0 0 0-.107.107v1.226a.108.108 0 0 0 .107.107h1.226a.108.108 0 0 0 .107-.107v-1.225a.108.108 0 0 0-.107-.107Z\"/><path fill=\"#ea2d2e\" d=\"M27.215 11.23c-.052.069-.417-.262-.653-.526a4.408 4.408 0 0 1-.516-.73A2.6 2.6 0 0 1 25.7 9.2a2.358 2.358 0 0 1-.052-.682a2.959 2.959 0 0 1 .129-.749a3.142 3.142 0 0 1 .787-1.207a15.532 15.532 0 0 0 1.283-1.4a3.062 3.062 0 0 0 .479-.927a3.979 3.979 0 0 0 .151-.855c.019-.364-.025-.593.023-.613s.215.274.287.564a3.167 3.167 0 0 1-.458 2.1a6.9 6.9 0 0 1-1.094 1.448a2.8 2.8 0 0 0-.849 1.234a2.466 2.466 0 0 0-.086.687a3.465 3.465 0 0 0 .476 1.542c.288.572.48.833.439.888Z\"/><path d=\"M27.193 11.266c-.124 0-.492-.365-.651-.544a4.478 4.478 0 0 1-.52-.734a2.628 2.628 0 0 1-.346-.781a2.375 2.375 0 0 1-.053-.69a2.978 2.978 0 0 1 .13-.756a3.208 3.208 0 0 1 .793-1.216c.294-.331.5-.528.659-.686a4.393 4.393 0 0 0 .622-.711a3.052 3.052 0 0 0 .476-.919a3.951 3.951 0 0 0 .15-.849c.008-.159 0-.294 0-.393c0-.159-.006-.225.038-.243a.05.05 0 0 1 .043 0a1.226 1.226 0 0 1 .28.579a3.167 3.167 0 0 1-.46 2.121a6.928 6.928 0 0 1-1.1 1.453c-.055.06-.109.116-.162.171a2.3 2.3 0 0 0-.681 1.052a2.47 2.47 0 0 0-.082.673a3.458 3.458 0 0 0 .473 1.53c.114.231.215.415.289.549c.129.235.178.323.142.369a.051.051 0 0 1-.04.02ZM28.512 2.8a.863.863 0 0 0 0 .19c0 .1.007.236 0 .4a4.021 4.021 0 0 1-.152.861a3.106 3.106 0 0 1-.483.934a4.437 4.437 0 0 1-.629.719c-.162.158-.364.354-.657.683a3.168 3.168 0 0 0-.782 1.2a2.933 2.933 0 0 0-.128.743a2.325 2.325 0 0 0 .052.675a2.59 2.59 0 0 0 .341.767a4.422 4.422 0 0 0 .513.725a2.035 2.035 0 0 0 .611.526a1.183 1.183 0 0 0-.147-.31a12.935 12.935 0 0 1-.29-.551a3.5 3.5 0 0 1-.483-1.562a2.53 2.53 0 0 1 .084-.688a2.375 2.375 0 0 1 .694-1.075c.052-.055.106-.111.161-.171a6.879 6.879 0 0 0 1.09-1.442a3.119 3.119 0 0 0 .456-2.083a1.281 1.281 0 0 0-.251-.541Z\"/><path fill=\"#ea2d2e\" d=\"M29.972 6.087c-.019-.088-.432-.04-.766.073a2.6 2.6 0 0 0-1.059.722a2.8 2.8 0 0 0-.916 1.855a2.972 2.972 0 0 0 .258 1.06c.221.572.455.773.444 1.225c-.007.3-.114.484-.048.549s.314-.1.462-.313a1.8 1.8 0 0 0 .259-1.022c-.046-.815-.6-1.015-.608-1.8a1.858 1.858 0 0 1 .129-.676c.443-1.251 1.881-1.508 1.845-1.673Z\"/><path d=\"M27.934 11.617a.094.094 0 0 1-.069-.026c-.046-.046-.03-.122-.005-.237a1.718 1.718 0 0 0 .045-.331a1.374 1.374 0 0 0-.214-.72a5 5 0 0 1-.228-.495a2.98 2.98 0 0 1-.259-1.07a2.81 2.81 0 0 1 .923-1.874a2.64 2.64 0 0 1 1.07-.729a1.482 1.482 0 0 1 .766-.1a.065.065 0 0 1 .037.046c.015.07-.092.121-.306.224a2.73 2.73 0 0 0-1.542 1.463a1.827 1.827 0 0 0-.127.667a1.645 1.645 0 0 0 .291.885a1.889 1.889 0 0 1 .317.914a1.814 1.814 0 0 1-.264 1.039a.809.809 0 0 1-.421.342Zm1.889-5.549a2.117 2.117 0 0 0-.608.117a2.588 2.588 0 0 0-1.048.715a2.764 2.764 0 0 0-.909 1.837a2.935 2.935 0 0 0 .256 1.05a4.955 4.955 0 0 0 .225.49a1.433 1.433 0 0 1 .22.745a1.765 1.765 0 0 1-.047.341c-.019.091-.035.163-.009.188a.046.046 0 0 0 .038.01a.769.769 0 0 0 .382-.32a1.793 1.793 0 0 0 .254-1.005a1.844 1.844 0 0 0-.31-.89a1.711 1.711 0 0 1-.3-.911a1.877 1.877 0 0 1 .13-.686a2.776 2.776 0 0 1 1.573-1.492c.126-.061.283-.136.277-.164l-.008-.007a.264.264 0 0 0-.116-.018Z\"/></svg>";

export enum OutputType {
    PNG = "png",
    SVG = "svg",
    ASCII = "txt"
}

/**
 * This may be true, even if the obsidian version does not support it.
 * This can be the case if one device uses live preview, while another synced device has no support for live preview
 * It also only represents the value in `Settings > Editor > default editing mode`
 */
export function isUsingLivePreview() : boolean {
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    const config = (this.app.vault as any).config;
    return config.livePreview;
}

/**
 * @returns true if Live Preview is supported
 */
export function isUsingLivePreviewEnabledEditor() : boolean {
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    const config = (this.app.vault as any).config;

    /**
     * legacyEditor is only referring to CodeMirror 5, while the new editor on desktop uses CodeMirror 6
     * on mobile the editor has always been CM6, so only using this method is not reliable.
     */
    if(config.legacyEditor === undefined) return false;
    if(config.legacyEditor) return false;

    //requireApiVersion() has been added with 0.13.23, so we need a different method to be sure
    const userAgent = navigator.userAgent.match(/obsidian([^ ]+)/);

    //we are on mobile, there is no legacy editor on mobile.
    if (userAgent === null) {
        return true;
    }
    const version = userAgent.first().split("/")[1];
    //live preview was added with 0.13, so there is no way that prior versions would support it.
    return compareVersions.compare(version, "0.13.0", ">=");
}
