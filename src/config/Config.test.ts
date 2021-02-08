import { IContext, getContext, getConfig } from './Config';

describe("Context configuration", () => {
    const mockData : Map<string, IContext> = new Map<string, IContext>();

    mockData.set("www.chrisipowell.co.uk", {
        apiBase: "api.chrisipowell.co.uk",
        siteTitle: "Chris I Powell"
    });

    mockData.set("dev.chrisipowell.co.uk", {
        apiBase: "api.dev.chrisipowell.co.uk",
        siteTitle: "[DEV] Chris I Powell"
    });

    mockData.set("localhost", {
        apiBase: "localhost:8080",
        siteTitle: "[LOCAL] Chris I Powell"
    });

    it.each`
        siteHost                        | apiUrl                            | siteTitle
        ${'www.chrisipowell.co.uk'}     | ${'api.chrisipowell.co.uk'}       | ${'Chris I Powell'}
        ${'dev.chrisipowell.co.uk'}     | ${'api.dev.chrisipowell.co.uk'}   | ${'[DEV] Chris I Powell'}
        ${'localhost'}                  | ${'localhost:8080'}               | ${'[LOCAL] Chris I Powell'}
        ${'notahost'}                   | ${''}                             | ${''}
    `("Should get the correct prod config when in prod", ({siteHost, apiUrl, siteTitle}) => {
        const ctx: IContext = getContext(mockData, siteHost);

        expect(ctx.apiBase).toBe(apiUrl);
        expect(ctx.siteTitle).toBe(siteTitle);
    });
});

describe('fetching default configs', () => {
    it('Allo loaded configs should be valid', () => {
        const configurations = getConfig();

        configurations.forEach((value, key) => {
            expect(key).not.toBe("");
            expect(value.apiBase).not.toBe("");
            expect(value.siteTitle).not.toBe("");
        });
    });
});