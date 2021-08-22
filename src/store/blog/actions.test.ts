import { Dispatch } from "redux";
import { fetchPosts, REQUEST_POSTS, POSTS_ARRIVED, POSTS_FAILED, IBlogAction, getCurrentPost, SELECT_CURRENT_POST, CURRENT_POST_SET } from "./actions";

describe('Blog Store actions >> ', () => {
    describe('Fetch posts >>',() => {
        let fetchMock : jest.Mock;
        let dispatchMock: jest.Mock;
        let fetchAction: (dispatch: Dispatch<IBlogAction>) => Promise<void>

        const mockApiBase = 'https://test.chrisipowell.co.uk';

        beforeEach(async () => { 
            dispatchMock = jest.fn();
            fetchMock = jest.fn().mockResolvedValue({
                json: () => Promise.resolve([])
            });
            window.fetch = fetchMock;
            fetchAction = fetchPosts({ apiBase: mockApiBase, siteTitle: ''});
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

    describe('Select current post >>',() => {
        let fetchMock : jest.Mock;
        let dispatchMock: jest.Mock;
        let getCurrentPostAction: (dispatch: Dispatch<IBlogAction>) => Promise<void>

        const mockApiBase = 'https://test.chrisipowell.co.uk';

        beforeEach(async () => { 
            dispatchMock = jest.fn();
            fetchMock = jest.fn().mockResolvedValue({
                json: () => Promise.resolve([])
            });
            window.fetch = fetchMock;
            getCurrentPostAction = getCurrentPost({ apiBase: mockApiBase, siteTitle: ''}, 'test-slug');
        });

        it('should call set current post action', async () => {
            await getCurrentPostAction(dispatchMock);
            expect(dispatchMock).toBeCalledWith({ 
                currentPost: undefined, 
                type: SELECT_CURRENT_POST,
                slug: "test-slug" 
            });
        });

        it('should call the currentPostSelected action', async () => {
            await getCurrentPostAction(dispatchMock);
            expect(dispatchMock).toBeCalledWith({ type: CURRENT_POST_SET });
        });
    });
});