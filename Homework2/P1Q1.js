db["callsForService"].distinct("City", { City: { $ne: null } }).length;
