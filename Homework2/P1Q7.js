db["callsForService"].find({
  $expr: {
    $and: [
      // Check if month is July (month 7)
      { $eq: [
        { $month: { 
          $dateFromString: { 
            dateString: "$Call Date",
            format: "%Y-%m-%dT%H:%M:%S" 
          } 
        }}, 7]
      },
      
      // Check if day is weekend (Saturday=7 or Sunday=1)
      { $or: [
        // Saturday (7)
        { $eq: [
          { $dayOfWeek: { 
            $dateFromString: { 
              dateString: "$Call Date",
              format: "%Y-%m-%dT%H:%M:%S" 
            } 
          }}, 7]
        },
        // Sunday (1)
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
