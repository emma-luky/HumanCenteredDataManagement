db["callsForService"].find({
  $expr: {
    $and: [
      { $lte: [
        { $dayOfWeek: { 
          $dateFromString: { 
            dateString: "$Call Date",
            format: "%Y-%m-%dT%H:%M:%S" 
          } 
        }}, 6]
      },
      { $gte: [
        { $dayOfWeek: { 
          $dateFromString: { 
            dateString: "$Call Date",
            format: "%Y-%m-%dT%H:%M:%S" 
          } 
        }}, 2]
      },
      { $gte: ["$Call Time", "18:00"] },
      { $lt: ["$Call Time", "24:00"] }
    ]
  }
}).count();
