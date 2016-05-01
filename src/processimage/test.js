import test from 'ava';
import {handler as fn} from './index';

test('sanity', t => {
	t.truthy(fn, 'lambda function exists');
});

test('add operation', t => {
	t.plan(1);

	const event = {
		op: 'ADD',
		x: 2,
		y: 2
	};

	const context = {
		succeed: (res) => {
			t.is(res.value, 4);
		}
	};

	fn(event, context);
});
