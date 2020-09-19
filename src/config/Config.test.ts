import { IContext, getContext } from './Config';

describe("Context configuration", () => {
    let mockData : Map<String, IContext> = new Map<String, IContext>();

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
    `("Should get the correct prod config when in prod", ({siteHost, apiUrl, siteTitle}) => {
        let ctx: IContext = getContext(mockData, siteHost);

        expect(ctx.apiBase).toBe(apiUrl);
        expect(ctx.siteTitle).toBe(siteTitle);
    });
});