import { retrieveSensorsData } from "./index";
import {data} from '../../../../data/mock-homepage-data'
describe('retrieveSensorsData Tests Sutie', () => {
    it('should return something', () => {
        expect(retrieveSensorsData()).toBeDefined()
    });
    it('should return the mock data', () => {
        expect(retrieveSensorsData()).toBe(data.facades)
    });
})