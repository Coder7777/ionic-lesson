var faker = require('faker');
faker.locale = "zh_CN";


function generateSecondHandHouse() {
    var secondHandHouse = [];
    for (let id = 1; id <= 50; id++) {
        secondHandHouse.push(
            {
                "imgUrl": "assets/ui/second-hand-house-img/" + faker.random.number({ min: 1, max: 5 }) + ".png",
                "description": "电梯豪装小三房，首付" + faker.random.number({ min: 50, max: 140 }) + "万",
                "projectName": "夏鑫博世园" + faker.random.number({ min: 1, max: 4 }) + "期",
                "location": faker.address.streetAddress(true),
                "projectID": id,
                "id": id,
                "face": "朝南",
                "totalPrice": "2500000",
                "unitPrice": faker.random.number({ min: 8000, max: 13000 }),
                "room": faker.random.number({ min: 1, max: 4 }),
                "washRoom": faker.random.number({ min: 1, max: 4 }),
                "hall": faker.random.number({ min: 1, max: 4 }),
                "buildArea": faker.random.number({ min: 50, max: 150 }),
                "feature": [
                    {
                        text: "满五年",
                        type: "1"
                    },
                    {
                        text: "认证房源",
                        type: "2"
                    },
                    {
                        text: "随时看房",
                        type: "3"
                    },
                    {
                        text: "交通便利",
                        type: "4"
                    }
                ]
            }
        );
    }
    return secondHandHouse;
};

function generateNewHouse() {
    var newHouse = [];
    for (let id = 0; id < 50; id++) {
        var firstName = faker.name.findName();
        var lastName = faker.name.lastName();
        var email = faker.internet.email();

        newHouse.push(
            {
                "imgUrl": "assets/ui/second-hand-house-img/" + faker.random.number({ min: 1, max: 5 }) + ".png",
                "description": "电梯豪装小三房，首付" + faker.random.number({ min: 50, max: 140 }) + "万",
                "projectName": "夏鑫博世园" + faker.random.number({ min: 1, max: 4 }) + "期",
                "location": faker.address.streetAddress(true),
                "projectID": id,
                "id": id,
                "face": "朝南",
                "totalPrice": "2500000",
                "unitPrice": faker.random.number({ min: 8000, max: 13000 }),
                "room": faker.random.number({ min: 1, max: 4 }),
                "washRoom": faker.random.number({ min: 1, max: 4 }),
                "hall": faker.random.number({ min: 1, max: 4 }),
                "buildArea": faker.random.number({ min: 50, max: 150 }),
                "feature": [
                    {
                        text: "满五年",
                        type: "1"
                    },
                    {
                        text: "认证房源",
                        type: "2"
                    },
                    {
                        text: "随时看房",
                        type: "3"
                    },
                    {
                        text: "交通便利",
                        type: "4"
                    }
                ]
            }
        );
    }
    return newHouse;
};

function generateData() {
    var result = {
        secondHandHouse: generateSecondHandHouse(),
        newHouse: generateNewHouse()
    };
    return result;
}

module.exports = generateData;