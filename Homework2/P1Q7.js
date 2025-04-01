db["callsForService"].find({
  $expr: {
    $and: [
      { $eq: [
        { $month: { 
          $dateFromString: { 
            dateString: "$Call Date",
            format: "%Y-%m-%dT%H:%M:%S" 
          } 
        }}, 7]
      },
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
      ]}
    ]
  }
}).count();
