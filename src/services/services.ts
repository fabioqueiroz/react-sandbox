import { repository } from '../services/repository';
import { PredictionInterface } from '../models/prediction.model';
import { ServiceHandlingInterface } from '../shared/service-handling';
import { Config } from '../config/config'

export const services = {
    addComment: (comment: string) : Promise<ServiceHandlingInterface<string>> => {
        return repository.post(`${Config.mlservice}MachineLearning/`, JSON.stringify(comment))
    }
}