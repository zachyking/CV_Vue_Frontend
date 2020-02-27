import { experience } from '@/assets/cv';
class CVService {
    public getAllExperience() {
        return experience;
    }

    public getByIndex(index: number) {
        if (experience.length > index) {
            return experience[index];
        }

        throw new Error(`Unable to find XP for index ${index}`);
    }
}
const service = new CVService();
export default service;
