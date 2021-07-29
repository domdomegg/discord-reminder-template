const config = require('./config.json');

test(
  'channelId',
  function channelId() {
    expect(typeof config.channelId).toBe('string');
  }
);

test(
    'events',
    function events() {
        expect(Array.isArray(config.events)).toBe(true);
        for(let i = 0; i < config.events.length; i++){
            expect(config.events[i].date).toMatch(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/);
            expect(typeof config.events[i].message).toBe('string');
        }
    }
);
