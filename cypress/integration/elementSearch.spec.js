// search element by tag name
cy.get("vacation")

// search element by ID
cy.get("#inputEmail")

// search element by class name
cy.get(".input")

//search element by attribute name
cy.get("[placeholder]")

//search element by attribute name and value
cy.get('[placeholder="Email"]')

// search element by class value
cy.get('[class="input-full-width size-medium shape-rectangle"]')

//search element by tag name attribute with value
cy.get('input[placeholder="Email"]')

// search by two different attributes and you can add as many
// attributes as you want
cy.get('[placeholder="Email"][type="email"]')

//search element by tag name, attribute with value, ID and class name
cy.get('input[placeholder="Email"]#inputEmail.input-full')

//The most recomennded way by cypress, add to the target element
//"data-cy=addProperName"
cy.get('[data-cy="addProperName"]')
