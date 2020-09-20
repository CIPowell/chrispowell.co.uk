import config from './configs.json'

export interface IContext { 
    apiBase: string,
    siteTitle: string
}

function getConfig() :Map<String, IContext> {
    var configMap = new Map<String, IContext>();

    Object.values(config).forEach(item => {
        configMap.set(item.siteUrl, Object.assign({ siteTitle: '', apiBase: '' }, item));
    });

    return configMap;
}

export function getContext(data: Map<String, IContext> = getConfig(), currentHost: String = window.location.hostname) : IContext {        
    let config = data.get(currentHost);
    if (config) {
        return config;
    }
    return { apiBase: "", siteTitle: ""}
}