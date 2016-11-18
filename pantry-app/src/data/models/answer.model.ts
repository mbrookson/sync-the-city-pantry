import { ConceptModel } from './concept.model';

export class AnswerModel {
    subject: string;
    dataType: string;
    relationship: string;
    prompt: string;
    type: string;
    plural: boolean;
    allowCF: boolean;
    allowUnknown: boolean;
    canAdd: boolean;
    knownAnswers: AnswerModel[];
    concepts: ConceptModel[];
}
