import { fetchPosts, REQUEST_POSTS, POSTS_ARRIVED, POSTS_FAILED } from "./actions";

describe('Blog Store actions >> ', () => {
    describe('Fetch posts >>',() => {
        let fetchMock;
        let dispatchMock;
        let fetchAction;

        const mockApiBase = 'https://test.chrisipowell.co.uk';

        beforeEach(async () => { 
            dispatchMock = jest.fn();
            fetchMock = jest.fn().mockResolvedValue({
                json: () => Promise.resolve([])
            });
            window.fetch = fetchMock;
            fetchAction = fetchPosts({ apiRoot: mockApiBase});
        });

        it('should call the request posts action', async () => {
            await fetchAction(dispatchMock);
            expect(dispatchMock).toBeCalledWith({ type: REQUEST_POSTS });
        });

        it('should call the correct URL with the correct params', async () => {
            await fetchAction(dispatchMock);
            expect(fetchMock).toBeCalledWith(`${mockApiBase}/blog`, {
                method: 'GET'
            });
        });

        it('should call the posts arrived action if it works successfully', async () => {
            await fetchAction(dispatchMock);
            expect(dispatchMock).toBeCalledWith({
                type: POSTS_ARRIVED,
                posts: []
            });
        });

        it('should call the post failed action if the posts do not arrive', async () => {
            fetchMock = jest.fn().mockRejectedValue({
                error: "could not connect"
            });
            window.fetch = fetchMock;
            
            await fetchAction(dispatchMock);

            expect(dispatchMock).toBeCalledWith({
                type: POSTS_FAILED,
                error: "could not connect"
            });
        });
    });
});