db["callsForService"].countDocuments({ City: { $ne: null, $ne: "San Francisco" } });
