import * as Capability from './capability';
import { checkCapability } from './capability';

describe('capability constant', () => {
  it('ALL_CAPABILITY is expected', () => {
    expect(Capability.ALL_CAPABILITY.with.domain).toEqual('*');
    expect(Capability.ALL_CAPABILITY.with.pointers).toEqual(['*']);
    expect(Capability.ALL_CAPABILITY.can).toEqual(['*']);
  });

  it('AGENT_AUTH_CAPABILITY is expected', () => {
    expect(Capability.AGENT_AUTH_CAPABILITY.with.domain).toEqual('agent');
    expect(Capability.AGENT_AUTH_CAPABILITY.with.pointers).toEqual(['*']);
    expect(Capability.AGENT_AUTH_CAPABILITY.can).toEqual(['AUTHENTICATE']);
  });

  it('AGENT_READ_CAPABILITY is expected', () => {
    expect(Capability.AGENT_READ_CAPABILITY.with.domain).toEqual('agent');
    expect(Capability.AGENT_READ_CAPABILITY.with.pointers).toEqual(['*']);
    expect(Capability.AGENT_READ_CAPABILITY.can).toEqual(['READ']);
  });

  it('AGENT_CREATE_CAPABILITY is expected', () => {
    expect(Capability.AGENT_CREATE_CAPABILITY.with.domain).toEqual('agent');
    expect(Capability.AGENT_CREATE_CAPABILITY.with.pointers).toEqual(['*']);
    expect(Capability.AGENT_CREATE_CAPABILITY.can).toEqual(['CREATE']);
  });
});

describe('perspectiveQueryCapability', () => {
  it('query capability is expected', () => {
    const capability = Capability.perspectiveQueryCapability(['123', '456']);
    expect(capability.with.domain).toEqual('perspective');
    expect(capability.with.pointers).toEqual(['123', '456']);
    expect(capability.can).toEqual(['READ']);
  });
});

describe('checkCapability', () => {
  it('agent with ALL_CAPABILITY can permit an auth request', () => {
    const call = () => {
      checkCapability([Capability.ALL_CAPABILITY], Capability.AGENT_PERMIT_CAPABILITY);
    };
    expect(call).not.toThrow();
  });

  it('agent with ALL_CAPABILITY can request agent status', () => {
    const call = () => {
      checkCapability([Capability.ALL_CAPABILITY], Capability.AGENT_READ_CAPABILITY);
    };
    expect(call).not.toThrow();
  });

  it('agent with ALL_CAPABILITY can mutate the agent', () => {
    const call = () => {
      checkCapability([Capability.ALL_CAPABILITY], Capability.AGENT_CREATE_CAPABILITY);
    };
    expect(call).not.toThrow();
  });

  it('agent with AGENT_AUTH_CAPABILITY can not request the agent status', () => {
    const call = () => {
      checkCapability([Capability.AGENT_AUTH_CAPABILITY], Capability.AGENT_READ_CAPABILITY);
    };
    expect(call).toThrowError('Capability is not matched');
  });

  it('agent with AGENT_AUTH_CAPABILITY can not mutate the agent', () => {
    const call = () => {
      checkCapability([Capability.AGENT_AUTH_CAPABILITY], Capability.AGENT_CREATE_CAPABILITY);
    };
    expect(call).toThrow();
  });

  it('agent with AGENT_AUTH_CAPABILITY can request an auth', () => {
    const call = () => {
      checkCapability([Capability.AGENT_AUTH_CAPABILITY], Capability.AGENT_AUTH_CAPABILITY);
    };
    expect(call).not.toThrow();
  });

  it('agent with AGENT_READ_CAPABILITY can request the agent status', () => {
    const call = () => {
      checkCapability([Capability.AGENT_READ_CAPABILITY], Capability.AGENT_READ_CAPABILITY);
    };
    expect(call).not.toThrow();
  });

  it('agent with perspectiveQueryCapability can query a perspective', () => {
    const call = () => {
      checkCapability([Capability.perspectiveQueryCapability(['*'])], Capability.perspectiveQueryCapability(['123']));
    };
    expect(call).not.toThrow();
  });
});
