const _ = require('lodash');

const data = [
	{
		name: 'Johnny Last',
		content: 'Hello Everyone!',
		properties: 'ugly tweets'
	},
	{ name: 'Billy First', content: 'Hello Everyone!', properties: 'ugly tweets' }
];

function add(name, content, properties) {
	data.push({ name: name, content: content, properties: properties });
}

function list() {
	return _.cloneDeep(data);
}

function find(properties) {
	return _.cloneDeep(_.filter(data, properties));
}

module.exports = { add: add, list: list, find: find };

const randArrayEl = function(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
};

const getFakeName = function() {
	const fakeFirsts = [
		'Nimit',
		'David',
		'Shanna',
		'Emily',
		'Scott',
		'Karen',
		'Ben',
		'Dan',
		'Ashi',
		'Kate',
		'Omri',
		'Gabriel',
		'Joe',
		'Geoff'
	];
	const fakeLasts = [
		'Hashington',
		'Stackson',
		'McQueue',
		'OLogn',
		'Ternary',
		'Claujure',
		'Dunderproto',
		'Binder',
		'Docsreader',
		'Ecma'
	];
	return randArrayEl(fakeFirsts) + ' ' + randArrayEl(fakeLasts);
};

const getFakeTweet = function() {
	const awesome_adj = [
		'awesome',
		'breathtaking',
		'amazing',
		'funny',
		'sweet',
		'cool',
		'wonderful',
		'mindblowing',
		'impressive'
	];
	return (
		'Fullstack Academy is ' +
		randArrayEl(awesome_adj) +
		'! The instructors are just so ' +
		randArrayEl(awesome_adj) +
		'. #fullstacklove #codedreams'
	);
};
const getRandomProp = function() {
	const awesome_prop = ['long tweets', 'celeb tweets', 'ugly tweets'];
	return randArrayEl(awesome_prop);
};

for (let i = 0; i < 10; i++) {
	module.exports.add(getFakeName(), getFakeTweet(), getRandomProp());
}