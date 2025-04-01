db["callsForService"].find({
  "Original Crime Type Name": "Stolen Vehicle",
  
  $expr: {
    $and: [
      { $or: [
        { $eq: [
          { $dayOfWeek: { 
            $dateFromString: { 
              dateString: "$Call Date",
              format: "%Y-%m-%dT%H:%M:%S" 
            } 
          }}, 7]
        },
        { $eq: [
          { $dayOfWeek: { 
            $dateFromString: { 
              dateString: "$Call Date",
              format: "%Y-%m-%dT%H:%M:%S" 
            } 
          }}, 1]
        }
      ]},
      
      { $gte: ["$Call Time", "00:00"] },
      { $lt: ["$Call Time", "06:00"] }
    ]
  }
}).count();
