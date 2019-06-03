const db = require('./conn.js');

class Topics {
    constructor(id, topic, ranking){
        this.id = id;
        this.topic = topic;
        this.ranking = ranking;
    }

    static async getAll() {
        try {
            let response = await db.any(
                `select 
                    topics.topic, 
                    ranks.ranking 
                from 
                    topics 
                inner join ranks on topics.topic_id = ranks.rank_id
                order by topics.topic_id`);
            return response;
        } catch(err) {
            return err.message
        }
    }
}

module.exports = Topics;