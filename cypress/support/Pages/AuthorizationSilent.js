class AuthorizationSilent {

    requestGET() { return cy.request('GET', '/index.php?rt=account/login')}

    makeSilentAuthoriz(userLogining) {

        let csrftoken,
        csrfinstance;

        this.requestGET().then( response => {
            //console.log(response) //shows you data in console
            let htmlResp = document.createElement('html') //create the variable htmlResp and assign the empty HTML document to it
            console.log(htmlResp)
            htmlResp.innerHTML = response.body
            csrftoken = htmlResp.querySelector('#loginFrm [name="csrftoken"]').getAttribute('value')
            csrfinstance = htmlResp.querySelector('#loginFrm [name="csrfinstance"]').getAttribute('value')
    
        })
        .then(()=>{
            cy.request({
                method: 'POST',
                url: '/index.php?rt=account/login',
                body: {
                    loginname: userLogining.userName,
                    password: userLogining.pasw,
                    csrftoken: csrftoken,
                    csrfinstance: csrfinstance
                },
                form: true
            })
        })
    }

}

export default new AuthorizationSilent