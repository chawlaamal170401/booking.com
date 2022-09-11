import mongoose from 'mongoose';

const connectWithDb = () => {
    mongoose
        .connect(process.env.LOCAL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(console.log(`DB GOT CONNECTED`))
        .catch((error) => {
            console.log(`DB CONNECTION ISSUES`);
            console.log(error);
            process.exit(1);
        });
};

export default connectWithDb;
