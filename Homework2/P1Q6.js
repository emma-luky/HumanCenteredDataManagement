db["callsForService"].find({
  $expr: {
    $and: [
      // Weekday check (Mon-Fri) using Call Date
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
      
      // Time range check (6 PM to midnight exclusive) using Call Time
      { $gte: ["$Call Time", "18:00"] },
      { $lt: ["$Call Time", "24:00"] }
    ]
  }
}).count();
