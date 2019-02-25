import { expect } from 'chai';
import { demo } from '../../src/pure/demo';

describe('demo', function() {
  it('简单相加', function() {
    expect(demo(1, 2)).to.be.equal(3);
  });
});

