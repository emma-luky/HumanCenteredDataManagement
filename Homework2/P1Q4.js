db["callsForService"].countDocuments({ "Original Crime Type Name" : { $eq: "Homeless Complaint" }, City : {$eq: "San Francisco"} });
