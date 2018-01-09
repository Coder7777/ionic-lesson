var faker = require('faker');
faker.locale = "zh_CN";

function generateNewHouse() {
    var newHouse = [];
    var districts = ['鼓楼区', '马尾区', '仓山区', '晋安区', '台江区'];
    var decorate = ["毛坯", "精装", "简装"];
    var property = ["商品房", "商住两用"];
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
                "isElevator": faker.random.number({ min: 0, max: 1 }),
                "totalFloor": 33,
                "decorate": decorate[id % 3],
                "property": property[id % 2],
                "finishYear": faker.random.number({ min: 2010, max: 2016 }),
                "houseFloor": faker.random.number({ min: 1, max: 33 }),
                "publishDate": faker.date.between("2017-10-01", "2017-12-01"),
                "district": districts[id % 5],
                "totalPrice": faker.random.number({ min: 1500000, max: 2500000 }),
                "unitPrice": faker.random.number({ min: 8000, max: 13000 }),
                "room": faker.random.number({ min: 1, max: 4 }),
                "washRoom": faker.random.number({ min: 1, max: 4 }),
                "hall": faker.random.number({ min: 1, max: 4 }),
                "buildArea": faker.random.number({ min: 50, max: 150 }),
                "address": faker.address.streetAddress("zh-CN"),
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

function generateProject() {
    var projects = [];
    var projectName = ["香江明珠", "北京金山", "金晓苑", "华信花园", "保利香槟国际", "正祥江滨假日"];
    var districts = ['鼓楼区', '马尾区', '仓山区', '晋安区', '台江区'];
    var decorate = ["毛坯", "精装", "简装"];
    var property = ["商品房", "商住两用"];
    for (let id = 0; id < 50; id++) {
        projects.push({
            "imgUrl": "assets/ui/second-hand-house-img/" + faker.random.number({ min: 1, max: 5 }) + ".png",
            "projectName": projectName[id % projectName.length],
            "id": id,
            "district": districts[id % districts.length],
            "decorate": decorate[id % decorate.length],
            "property": property[id % property.length],
            "address": faker.address.streetAddress("zh - CN"),
            "avgPrice": faker.random.number({ min: 10000, max: 18000 }),
            "finishYear": faker.random.number({ min: 1998, max: 2017 })
        });
    }
    return projects;
    
}

function generateData() {
    var result = {
        secondHandHouse: generateNewHouse(),
        newHouse: generateNewHouse(),
        project: generateProject()
    };
    return result;
}

module.exports = generateData;