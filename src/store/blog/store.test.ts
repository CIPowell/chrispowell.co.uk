import { blogStore, BlogStore } from './store';
import { REQUEST_POSTS, POSTS_ARRIVED, POSTS_FAILED } from './actions';

describe("The Blog store >> ", () => {
    describe("when loading >> ", () => {
        it("should return a loading state of true", () => {
            const { loading }: { loading: boolean } = blogStore(new BlogStore(), { type: REQUEST_POSTS });

            expect(loading).toBeTruthy();
        });
    });

    describe("When posts arrive successfully >>", () => {
        it("should return loading and error states of false", () => {
            const state = new BlogStore();
            state.loading = true;

            const newState: BlogStore = blogStore(state, {
                type: POSTS_ARRIVED,
                posts: [{
                    title: "test Post",
                    body: "test post",
                    preview: "",
                    author: "CIP",
                    updatedAt: ""
                }]
            });

            expect(newState.loading).toBeFalsy();
            expect(newState.posts).toHaveLength(1);
            expect(newState.posts[0].title).toBe("test Post");
            expect(newState.error).toBeFalsy();
        });
    });

    describe("When posts fail to arrive >>", () => {
        it("should return an error state", () => {
            const state = new BlogStore();
            state.loading = true;
            state.posts = [{
                title: "test Post",
                body: "test post",
                preview: "",
                author: "CIP",
                updatedAt: ""
            }];

            const newState: BlogStore = blogStore(state, {
                type: POSTS_FAILED,
                error: "lost connection"
            });

            expect(newState.loading).toBeFalsy();
            expect(newState.posts).toHaveLength(1)
            expect(newState.error).toEqual("lost connection");
        });
    });

    describe("Unknown Action >> ", () => {
        it("shold return an appropriate error", () => {
            const state = new BlogStore();
            state.loading = true;
            state.posts = [{
                title: "test Post",
                body: "test post",
                preview: "",
                author: "CIP",
                updatedAt: ""
            }];

            const newState: BlogStore = blogStore(state, {
                type: "blah blah blah",
                error: "lost connection"
            });

            expect(newState.loading).toBeTruthy();
            expect(newState.posts).toHaveLength(1)
            expect(newState.error).toEqual(`action "blah blah blah" not implemented in the Blog Store`);
        });
    })
});