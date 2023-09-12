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
    else if (apprenticeLocation == "different-location") {
        res.redirect('/feature/multiple-locations/v1/different-location')
    }
    else {
        res.redirect('/feature/multiple-locations/v1/task-list')
    }
})
router.post('/feature/no-provider/v1/action/', function (req, res) {
    var providerKnow = req.session.data['provider-known']

    if (providerKnow == "yes") {
        res.redirect('/feature/no-provider/v1/select-training-provider')
    }
    else {
        res.redirect('/feature/no-provider/v1/task-list')
    }
})


router.post('/feature/competitive-salary/v1/wages/action', function (req, res) {
    var WageType = req.session.data['WageType']

    if (WageType == "competitiveWage") {
        res.redirect('/feature/competitive-salary/v1/competitive-min-wage')
    }
    else if(WageType == "fixedWage") {
        res.redirect('/feature/competitive-salary/v1/set-wage')
    }
    else {
        res.redirect('/feature/competitive-salary/v1/extra-info-pay')
    }
})

// V2

router.post('/feature/multiple-locations/v2/action/', function (req, res) {
    var apprenticeLocation = req.session.data['selected-location']

    if (apprenticeLocation == "multiple-locations") {
        res.redirect('/feature/multiple-locations/v2/multiple-locations')
    }
    else {
        res.redirect('/feature/multiple-locations/v2/task-list')
    }
})
router.post('/feature/no-provider/v2/action/', function (req, res) {
    var providerKnow = req.session.data['provider-known']

    if (providerKnow == "yes") {
        res.redirect('/feature/no-provider/v2/select-training-provider')
    }
    else {
        res.redirect('/feature/no-provider/v2/task-list')
    }
})


router.post('/feature/competitive-salary/v2/wages/action', function (req, res) {
    var WageType = req.session.data['WageType']

    if (WageType == "competitiveWage") {
        res.redirect('/feature/competitive-salary/v2/competitive-min-wage')
    }
    else if(WageType == "fixedWage") {
        res.redirect('/feature/competitive-salary/v2/set-wage')
    }
    else {
        res.redirect('/feature/competitive-salary/v2/extra-info-pay')
    }
})
