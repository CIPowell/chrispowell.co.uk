import config from './configs.json'

export interface IContext { 
    apiBase: string,
    siteTitle: string
}

export function getConfig() :Map<string, IContext> {
    const configMap = new Map<string, IContext>();

    Object.values(config).forEach(item => {
        configMap.set(item.siteUrl, Object.assign({ siteTitle: '', apiBase: '' }, item));
    });

    return configMap;
}

export function getContext(data: Map<string, IContext> = getConfig(), currentHost: string = window.location.hostname) : IContext {        
    const currentConfig = data.get(currentHost);
    if (currentConfig) {
        return currentConfig;
    }
    return { apiBase: "", siteTitle: ""}
}