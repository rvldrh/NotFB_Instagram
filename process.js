const followingData = require('./following_n_followers');
const followersData = require('./following_n_followers');

function getFollowBackAndNotFollowBack() {
    if (!followersData.followers || !Array.isArray(followersData.followers) || followersData.followers.length === 0) {
        throw new Error("Followers data tidak valid atau kosong.");
    }

    const followersList = followersData.followers.flatMap(follower => follower.string_list_data);

    if (!followersList || followersList.length === 0) {
        throw new Error("Followers data tidak memiliki string_list_data yang valid.");
    }

    const followersMap = new Map(followersList.map(user => [user.value, user.href]));

    const followBack = [];
    const notFollowBack = [];

    if (!followingData.following || !followingData.following.relationships_following || followingData.following.relationships_following.length === 0) {
        throw new Error("Following data tidak memiliki relationships_following yang valid.");
    }

    followingData.following.relationships_following.forEach(relationship => {
        if (relationship.string_list_data) {
            relationship.string_list_data.forEach(user => {
                if (followersMap.has(user.value)) {
                    followBack.push({
                        value: user.value,
                        href: user.href,
                        status: "Follow Back"
                    });
                } else {
                    notFollowBack.push({
                        value: user.value,
                        href: user.href,
                        status: "Not Follow Back"
                    });
                }
            });
        }
    });

    return {
        followBack,
        notFollowBack,
    };
}

try {
    const result = getFollowBackAndNotFollowBack();

    // console.log("Follow Back:");
    // console.log(result.followBack);

    console.log("Not Follow Back:");
    console.table(result.notFollowBack);
} catch (error) {
    console.error("Error:", error.message);
}