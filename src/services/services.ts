import { repository } from '../services/repository';
import { CommentInterface } from '../components/comment/comment.model';
import { ServiceHandlingInterface } from '../shared/service-handling';

export const services = {
    addComment: (comment: string) : Promise<ServiceHandlingInterface<string>> => {
        return repository.post(`https://localhost:44371/MachineLearning/`, JSON.stringify(comment))
    }

}