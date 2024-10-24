import { PostsComponent} from "./posts.component";
import { PostsService } from "./posts.service";
import { HttpClient } from "@angular/common/http";
import { EMPTY, of } from "rxjs";

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
});
