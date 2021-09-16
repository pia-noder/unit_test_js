/**
* @jest-environment jsdom
*/
import '@testing-library/jest-dom'

import { getByTestId} from "@testing-library/dom";
import { router } from './index.js'

describe('Router Integration Tests Suite', () => {
    it('should render the Sign in page', async () => {

        //recrer l'element body
        document.body.innerHTML = `
        <div id="root"></div>
        `
        //lancer le router
        await router()

        expect(getByTestId(document.body, 'sign-in-form-title')).toHaveTextContent("Veuillez vous connecter")
    });
    it('should render the Home page', async () => {
        document.body.innerHTML = `
        <div id="root"></div>
        `
        document.location = '/#/home'
        await router()

        expect(getByTestId(document.body, 'home-sensors-title')).toHaveTextContent("Vos capteurs")
    });
    it('should render FacadeDetails page', async () => {
        document.body.innerHTML = `
        <div id="root"></div>
        `

        document.location = '/#/facade-details'

        await router()

        expect(getByTestId(document.body, 'sensor-detail-title')).toHaveTextContent('Détails du capteur')
    });
    it('should render Add Sensor page', async () => {
        document.body.innerHTML = `
        <div id="root"></div>
        `

        document.location = '/#/add-sensor'

        await router()

        expect(getByTestId(document.body, 'add-sensor-title')).toHaveTextContent('Ajout d\'un nouveau capteur')
    })
})