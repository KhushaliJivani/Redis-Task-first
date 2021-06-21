const client = require("../../configRedis/redisInit");
exports.buttons = async (req, res) => {
    try {
        res.render('index');
    } catch (err) {
        res.status(400).send({
            message: err.message
        });
    }
}
let countRed = 1;
let countGreen = 1;
let countBlue = 1;
exports.incrementButton = async (req, res) => {
    try {
        const color = req.body.btn;
        if (color == "red") {
            client.hgetall('data1', function (err, result1) {
                if (result1) {
                    client.incr('count', function (err, counter1) {
                        client.hset('data1', 'color', 'red');
                        client.hset('data1', 'count', counter1);
                    })
                    client.hgetall('data1', function (err, result1) {
                        if (err) {
                            res.status(400).send({
                                error: err.message
                            });
                        } else {
                            res.status(200).send({
                                message: result1
                            });
                        }
                    })
                } else {
                    client.hset('data1', 'color', 'red');
                    client.hset('data1', 'count', `1`);
                    client.hgetall('data1', function (err, result1) {
                        if (err) {
                            res.status(400).send({
                                error: err.message
                            });
                        } else {
                            res.status(200).send({
                                message: result1
                            });
                        }
                    });

                }
            })
        } else if (color == "blue") {
            client.hgetall('data2', function (err, result2) {
                if (result2) {
                    client.incr('count', function (err, counter2) {
                        client.hset('data2', 'color', 'blue');
                        client.hset('data2', 'count', counter2);
                    })
                    client.hgetall('data2', function (err, result2) {
                        if (err) {
                            res.status(400).send({
                                error: err.message
                            });
                        } else {
                            res.status(200).send({
                                message: result2
                            });
                        }
                    })
                } else {
                    client.hset('data2', 'color', 'blue');
                    client.hset('data2', 'count', `1`);
                    client.hgetall('data2', function (err, result2) {
                        if (err) {
                            res.status(400).send({
                                error: err.message
                            });
                        } else {
                            res.status(200).send({
                                message: result2
                            });
                        }
                    });

                }
            })
        } else {
            client.hgetall('data3', function (err, result3) {
                if (result3) {
                    client.incr('count', function (err, counter3) {
                        client.hset('data3', 'color', 'green');
                        client.hset('data3', 'count', counter3);
                    })
                    client.hgetall('data3', function (err, result3) {
                        if (err) {
                            res.status(400).send({
                                error: err.message
                            });
                        } else {
                            res.status(200).send({
                                message: result3
                            });
                        }
                    })
                } else {
                    client.hset('data3', 'color', 'green');
                    client.hset('data3', 'count', `1`);
                    client.hgetall('data3', function (err, result3) {
                        if (err) {
                            res.status(400).send({
                                error: err.message
                            });
                        } else {
                            res.status(200).send({
                                message: result3
                            });
                        }
                    });

                }
            })
        }
    } catch (err) {
        res.status(400).send({
            message: err.message
        });
    }
}