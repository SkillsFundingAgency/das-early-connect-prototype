//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.post('/feature/multiple-locations/v1/action/', function (req, res) {
    var apprenticeLocation = req.session.data['selected-location']

    if (apprenticeLocation == "multiple-locations") {
        res.redirect('/feature/multiple-locations/v1/multiple-locations')
    }
})
