db["callsForService"].distinct("Address", { "Original Crime Type Name" : { $eq: "Trespasser" }}).length;
