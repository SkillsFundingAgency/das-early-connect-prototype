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

router.post('/feature/multiple-locations/v2/action/', function (req, res) {
    var apprenticeLocation = req.session.data['selected-location']

    if (apprenticeLocation == "different-location") {
        res.redirect('/feature/multiple-locations/v2/new-address')
    }
    else if (apprenticeLocation == "multiple-locations") {
        res.redirect('/feature/multiple-locations/v2/add-existing-location')
    }
    else {
        res.redirect('/feature/multiple-locations/v2/task-list')
    }
})

    
router.post('/feature/multiple-locations-summary/v2/action/', function (req, res) {
    var addAnother = req.session.data['add-another']

    if (addAnother == "Yes") {
        res.redirect('/feature/multiple-locations/v2/multiple-locations')
    }
    else {
        res.redirect('/feature/multiple-locations/v2/task-list')
    }
})
router.post('/feature/multiple-location-check/v2/action/', function (req, res) {
    var multipleLocations = req.session.data['multiple-locations']

    if (multipleLocations == "yes") {
        res.redirect('/feature/multiple-locations/v2/add-existing-location')
    }
    else {
        res.redirect('/feature/multiple-locations/v2/location')
    }
})

router.post('/feature/multiple-locations/v2/add-new-location/action', function (req, res) {
    var newLocation = req.session.data['new-location']

    if (newLocation == "yes") {
        res.redirect('/feature/multiple-locations/v2/new-address')
    }
    else {
        res.redirect('/feature/multiple-locations/v2/multiple-locations-summary')
    }
})

router.post('/feature/competitive-salary/v3/wages/action', function (req, res) {
    var WageType = req.session.data['WageType']

    if (WageType == "competitiveWage") {
        res.redirect('/feature/competitive-salary/v3/competitive-min-wage')
    }
    else if(WageType == "fixedWage") {
        res.redirect('/feature/competitive-salary/v3/set-wage')
    }
    else {
        res.redirect('/feature/competitive-salary/v3/extra-info-pay')
    }
})
router.post('/feature/competitive-salary/v3/competitive-min-wage/action', function (req, res) {
    var aboveMinWage = req.session.data['above-mimimum-wage']

    if (aboveMinWage == "yes") {
        res.redirect('/feature/competitive-salary/v3/extra-info-pay')
    }
    else {
        res.redirect('/feature/competitive-salary/v3/wages')
    }
})

// Version 3

router.post('/feature/multiple-locations/v3/action/', function (req, res) {
    var apprenticeLocation = req.session.data['selected-location']

    if (apprenticeLocation == "different-location") {
        res.redirect('/feature/multiple-locations/v3/new-address')
    }
    else {
        res.redirect('/feature/multiple-locations/v3/task-list')
    }
})

// Version 4 - Multiple Locations
router.post('/feature/multiple-locations/v4/action/', function (req, res) {
    var apprenticeLocation = req.session.data['selected-location']

    if (apprenticeLocation == "different-location") {
        res.redirect('/feature/multiple-locations/v4/new-address')
    }
    else if (apprenticeLocation == "multiple-locations") {
        res.redirect('/feature/multiple-locations/v4/add-existing-location')
    }
    else {
        res.redirect('/feature/multiple-locations/v4/task-list')
    }
})

    
router.post('/feature/multiple-locations-summary/v4/action/', function (req, res) {
    var addAnother = req.session.data['add-another']

    if (addAnother == "Yes") {
        res.redirect('/feature/multiple-locations/v4/new-address')
    }
    else {
        res.redirect('/feature/multiple-locations/v4/task-list')
    }
})
router.post('/feature/multiple-location-check/v4/action/', function (req, res) {
    var multipleLocations = req.session.data['multiple-locations']

    if (multipleLocations == "yes") {
        res.redirect('/feature/multiple-locations/v4/add-existing-location')
    }
    else {
        res.redirect('/feature/multiple-locations/v4/location')
    }
})

router.post('/feature/multiple-locations/v4/add-new-location/action', function (req, res) {
    var newLocation = req.session.data['new-location']

    if (newLocation == "yes") {
        res.redirect('/feature/multiple-locations/v4/new-address')
    }
    else {
        res.redirect('/feature/multiple-locations/v4/multiple-locations-summary')
    }
})

// Triage form
router.post('/feature/triage-form/v1/check-your-answers/action', function (req, res) {
    var source = req.session.data['source']

    if (source == "ucas") {
        res.redirect('/feature/triage-form/v1/check-your-answers-ucas')
    }
    else {
        res.redirect('/feature/triage-form/v1/check-your-answers')
    }
})