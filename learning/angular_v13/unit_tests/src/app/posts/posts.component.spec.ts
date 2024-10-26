import { PostsComponent} from "./posts.component";
import { PostsService } from "./posts.service";
import { HttpClient } from "@angular/common/http";
import { EMPTY, of, throwError } from "rxjs";

describe('PostsComponent', () => {
  let postService: PostsService;
  let postComponent: PostsComponent;

  beforeEach(() => {
    // HttpClient as any because HttpClient is missing the following properties from type HttpClient: handler, request, delete, get, ...
    // Not return properties of HttpClient from postService.
    postService = new PostsService(HttpClient as any);
    postComponent = new PostsComponent(postService);
  })

  it("should call fetch when ngOnInit", () => {
    const spy = spyOn(postService, "fetch").and.callFake(() => {
      return EMPTY;
    });

    postComponent.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should update posts length after ngOnInit', () => {
    const posts = [ 1, 2, 3 ];
      // Fake call
      // spyOn(postService, "fetch").and.callFake(() => {
      //   return of(posts);
      // });

      // Return value
      spyOn(postService, "fetch").and.returnValue(of(posts));

      postComponent.ngOnInit();
      expect(postComponent.posts.length).toBe(3);
    });

  it("should add new post", () => {
    const post = { title: "test" };
    const spy = spyOn(postService, "create").and.returnValue(of(post));

    postComponent.add("test");
    expect(spy).toHaveBeenCalled();
    expect(postComponent.posts.length).toBe(1);
    expect(postComponent.posts.includes(post)).toBeTruthy();
  });

  it("should set message to error message", () => {
    const errorMessage = "Add new post error message";
    spyOn(postService, "create").and.returnValue(throwError(errorMessage));

    postComponent.add("Error message");
    expect(postComponent.message).toBe(errorMessage);
  });

  it("should remove post if user confirms", () => {
    const spy = spyOn(postService, 'remove').and.returnValue(EMPTY);

    spyOn(window, "confirm").and.returnValue(true);
    postComponent.delete(1);

    expect(spy).toHaveBeenCalledWith(1);
  });

  it("should not remove post if user doesn't confirms", () => {
    const spy = spyOn(postService, 'remove').and.returnValue(EMPTY);

    spyOn(window, "confirm").and.returnValue(false);
    postComponent.delete(1);

    expect(spy).not.toHaveBeenCalled();
  });
});
