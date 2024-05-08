import { Injectable } from "@angular/core";
import { PostRepository } from "../../repositories/post/post.repository";
import { Observable } from "rxjs";

@Injectable()
export class PostService {
    constructor(private postRepository: PostRepository) {}

    get():Observable<any> {
        return this.postRepository.get();
    }

    delete(id: number): Observable<any> {
        return this.postRepository.delete(id);
    }
}