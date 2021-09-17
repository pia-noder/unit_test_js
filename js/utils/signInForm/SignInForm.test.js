/**
 * @jest-environment jsdom
 */

 import '@testing-library/jest-dom'
 import { getByTestId,  getByLabelText, getByRole} from "@testing-library/dom";
 //ne pas mettre l'import de @testting-library entre croche qd il n'y en a qu'un 
 import  userEvent from "@testing-library/user-event";
 import { handleSignInForm } from './index.js'
 import SignInPage from '../../pages/signIn/index.js'
 


beforeEach(() => {
    document.body.innerHTML = SignInPage.render()
    //la fonctionhandleSignInForm permet d'ajouter un event sur le formulaire
    handleSignInForm()
})

afterEach(() => {
    document.body.innerHTML = ''
})

describe('SignInForm Integration Tests Suite', () => {
    it('should display the error msg when the email is not correct', () => {
        
        userEvent.type(
            getByLabelText(document.body, 'Votre addresse e-mail'),
            'thomas@thomas.com'
        )

        userEvent.click(getByRole(document.body, 'button'))

        expect(getByTestId(document.body, 'user-email-error-msg')).not.toHaveClass('hidden')
    })


    it('should display not error message when the email is valid', () => {
       //type permet de simuler l'utilisation d'un clavier
        //1- ecrire dans l'input voulu qui est selectionne par son label
        userEvent.type(getByLabelText(document.body,  'Votre addresse e-mail'),
        'thomas@facadia.com'
        )

        //2- Clique sur le bouton pour valider le formulaire
        userEvent.click(getByRole(document.body, 'button'))

        //3-Faire le test - le msg ne doit pas s'afficher
        expect(getByTestId(document.body, 'user-email-error-msg')).toHaveClass('hidden')

    })

    it('should display the error message when the password is not correct', () => {
        userEvent.type(
            getByLabelText(document.body, 'Votre addresse e-mail'),
            'thomas@facadia.com'
        )
        
        userEvent.type(
            getByLabelText(document.body, 'Votre mot de passe'),
            'azerty'
        )

        userEvent.click(getByRole(document.body, 'button'))
        
        expect(
            getByTestId(document.body, 'user-password-error-msg')
        ).not.toHaveClass('hidden')
    })
   

     it('should display not error message when the password is valid', () => {

        userEvent.type(
            getByLabelText(document.body, 'Votre addresse e-mail'),
            'thomas@facadia.com'
        )
        //type permet de simuler l'utilisation d'un clavier
         //1- ecrire dans l'input voulu qui est selectionne par son label
         userEvent.type(getByLabelText(document.body,  'Votre mot de passe'),
         'qwerty'
         )
 
         //2- Clique sur le bouton pour valider le formulaire
         userEvent.click(getByRole(document.body, 'button'))
 
         //3-Faire le test - le msg ne doit pas s'afficher
         expect(getByTestId(document.body, 'user-password-error-msg')).toHaveClass('hidden')
 
     })

})