db["callsForService"].find({
  $expr: {
    $and: [
      { $lte: [
        { $dayOfWeek: { 
          $dateFromString: { 
            dateString: "$Call Date Time",
            format: "%Y-%m-%dT%H:%M:%S" 
          } 
        }}, 6]
      },
      { $gte: [
        { $dayOfWeek: { 
          $dateFromString: { 
            dateString: "$Call Date Time",
            format: "%Y-%m-%dT%H:%M:%S" 
          } 
        }}, 2]
      },
      { $gte: [
        { $hour: { 
          $dateFromString: { 
            dateString: "$Call Date Time",
            format: "%Y-%m-%dT%H:%M:%S" 
          } 
        }}, 18]
      },
      { $lt: [
        { $hour: { 
          $dateFromString: { 
            dateString: "$Call Date Time",
            format: "%Y-%m-%dT%H:%M:%S" 
          } 
        }}, 24]
      }
    ]
  }
}).count();
