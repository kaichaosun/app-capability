import * as lodash from 'lodash';

export type Capabilities = Capability[];

export interface Capability {
  with: Resource;
  can: string[];
}

export interface Resource {
  domain: string;
  pointers: string[];
}

export const WILD_CARD = '*';

// admin capabilities
export const ALL_CAPABILITY: Capability = {
  with: {
    domain: WILD_CARD,
    pointers: [WILD_CARD],
  },
  can: [WILD_CARD],
};

// capabilities operations
const READ = 'READ';
const CREATE = 'CREATE';
const UPDATE = 'UPDATE';
const DELETE = 'DELETE';
const SUBSCRIBE = 'SUBSCRIBE';

// capabilities domains
const AGENT = 'agent';
const EXPRESSION = 'expression';
const LANGUAGE = 'language';
const PERSPECTIVE = 'perspective';
const NEIGHBOURHOOD = 'neighbourhood';
const RUNTIME = 'runtime';
const RUNTIME_TRUSTED_AGENTS = 'runtime.trusted_agents';
const RUNTIME_KNOWN_LINK_LANGUAGES = 'runtime.known_link_languages';
const RUNTIME_FRIENDS = 'runtime.friends';
const RUNTIME_MESSAGES = 'runtime.messages';

// agent related capabilities
export const AGENT_AUTH_CAPABILITY: Capability = {
  with: {
    domain: AGENT,
    pointers: [WILD_CARD],
  },
  can: ['AUTHENTICATE'],
};
export const AGENT_READ_CAPABILITY: Capability = {
  with: {
    domain: AGENT,
    pointers: [WILD_CARD],
  },
  can: [READ],
};
export const AGENT_CREATE_CAPABILITY: Capability = {
  with: {
    domain: AGENT,
    pointers: [WILD_CARD],
  },
  can: [CREATE],
};
export const AGENT_UPDATE_CAPABILITY: Capability = {
  with: {
    domain: AGENT,
    pointers: [WILD_CARD],
  },
  can: [UPDATE],
};
export const AGENT_LOCK_CAPABILITY: Capability = {
  with: {
    domain: AGENT,
    pointers: [WILD_CARD],
  },
  can: ['LOCK'],
};
export const AGENT_UNLOCK_CAPABILITY: Capability = {
  with: {
    domain: AGENT,
    pointers: [WILD_CARD],
  },
  can: ['UNLOCK'],
};
export const AGENT_PERMIT_CAPABILITY: Capability = {
  with: {
    domain: AGENT,
    pointers: [WILD_CARD],
  },
  can: ['PERMIT'],
};
export const AGENT_SUBSCRIBE_CAPABILITY: Capability = {
  with: {
    domain: AGENT,
    pointers: [WILD_CARD],
  },
  can: [SUBSCRIBE],
};

// expression related capabilites
export const EXPRESSION_READ_CAPABILITY: Capability = {
  with: {
    domain: EXPRESSION,
    pointers: [WILD_CARD],
  },
  can: [READ],
};

export const EXPRESSION_CREATE_CAPABILITY: Capability = {
  with: {
    domain: EXPRESSION,
    pointers: [WILD_CARD],
  },
  can: [CREATE],
};

export const EXPRESSION_UPDATE_CAPABILITY: Capability = {
  with: {
    domain: EXPRESSION,
    pointers: [WILD_CARD],
  },
  can: [UPDATE],
};

// language related capabilities
export const LANGUAGE_READ_CAPABILITY: Capability = {
  with: {
    domain: LANGUAGE,
    pointers: [WILD_CARD],
  },
  can: [READ],
};
export const LANGUAGE_CREATE_CAPABILITY: Capability = {
  with: {
    domain: LANGUAGE,
    pointers: [WILD_CARD],
  },
  can: [CREATE],
};
export const LANGUAGE_UPDATE_CAPABILITY: Capability = {
  with: {
    domain: LANGUAGE,
    pointers: [WILD_CARD],
  },
  can: [UPDATE],
};

// perspective related capabilities
export const perspectiveQueryCapability = (pointers: string[]) => {
  return {
    with: {
      domain: PERSPECTIVE,
      pointers: pointers,
    },
    can: [READ],
  } as Capability;
};
export const PERSPECTIVE_CREATE_CAPABILITY: Capability = {
  with: {
    domain: PERSPECTIVE,
    pointers: [WILD_CARD],
  },
  can: [CREATE],
};
export const perspectiveUpdateCapability = (pointers: string[]) => {
  return {
    with: {
      domain: PERSPECTIVE,
      pointers: pointers,
    },
    can: [UPDATE],
  } as Capability;
};
export const perspectiveDeleteCapability = (pointers: string[]) => {
  return {
    with: {
      domain: PERSPECTIVE,
      pointers: pointers,
    },
    can: [DELETE],
  } as Capability;
};
export const PERSPECTIVE_SUBSCRIBE_CAPABILITY: Capability = {
  with: {
    domain: PERSPECTIVE,
    pointers: [WILD_CARD],
  },
  can: [SUBSCRIBE],
};

// neighbourhood related capabilities
export const NEIGHBOURHOOD_CREATE_CAPABILITY: Capability = {
  with: {
    domain: NEIGHBOURHOOD,
    pointers: [WILD_CARD],
  },
  can: [CREATE],
};
export const NEIGHBOURHOOD_READ_CAPABILITY: Capability = {
  with: {
    domain: NEIGHBOURHOOD,
    pointers: [WILD_CARD],
  },
  can: [READ],
};

// runtime related capabilities
export const RUNTIME_TRUSTED_AGENTS_READ_CAPABILITY: Capability = {
  with: {
    domain: RUNTIME_TRUSTED_AGENTS,
    pointers: [WILD_CARD],
  },
  can: [READ],
};
export const RUNTIME_TRUSTED_AGENTS_CREATE_CAPABILITY: Capability = {
  with: {
    domain: RUNTIME_TRUSTED_AGENTS,
    pointers: [WILD_CARD],
  },
  can: [CREATE],
};
export const RUNTIME_TRUSTED_AGENTS_DELETE_CAPABILITY: Capability = {
  with: {
    domain: RUNTIME_TRUSTED_AGENTS,
    pointers: [WILD_CARD],
  },
  can: [DELETE],
};

export const RUNTIME_KNOWN_LINK_LANGUAGES_READ_CAPABILITY: Capability = {
  with: {
    domain: RUNTIME_KNOWN_LINK_LANGUAGES,
    pointers: [WILD_CARD],
  },
  can: [READ],
};
export const RUNTIME_KNOWN_LINK_LANGUAGES_CREATE_CAPABILITY: Capability = {
  with: {
    domain: RUNTIME_KNOWN_LINK_LANGUAGES,
    pointers: [WILD_CARD],
  },
  can: [CREATE],
};
export const RUNTIME_KNOWN_LINK_LANGUAGES_DELETE_CAPABILITY: Capability = {
  with: {
    domain: RUNTIME_KNOWN_LINK_LANGUAGES,
    pointers: [WILD_CARD],
  },
  can: [DELETE],
};

export const RUNTIME_FRIENDS_READ_CAPABILITY: Capability = {
  with: {
    domain: RUNTIME_FRIENDS,
    pointers: [WILD_CARD],
  },
  can: [READ],
};
export const RUNTIME_FRIENDS_CREATE_CAPABILITY: Capability = {
  with: {
    domain: RUNTIME_FRIENDS,
    pointers: [WILD_CARD],
  },
  can: [CREATE],
};
export const RUNTIME_FRIENDS_DELETE_CAPABILITY: Capability = {
  with: {
    domain: RUNTIME_FRIENDS,
    pointers: [WILD_CARD],
  },
  can: [DELETE],
};

export const RUNTIME_FRIEND_STATUS_READ_CAPABILITY: Capability = {
  with: {
    domain: 'runtime.friend_status',
    pointers: [WILD_CARD],
  },
  can: [READ],
};
export const RUNTIME_MY_STATUS_UPDATE_CAPABILITY: Capability = {
  with: {
    domain: 'runtime.my_status',
    pointers: [WILD_CARD],
  },
  can: [UPDATE],
};
export const RUNTIME_HC_AGENT_INFO_READ_CAPABILITY: Capability = {
  with: {
    domain: 'runtime.hc_agent_info',
    pointers: [WILD_CARD],
  },
  can: [READ],
};
export const RUNTIME_HC_AGENT_INFO_CREATE_CAPABILITY: Capability = {
  with: {
    domain: 'runtime.hc_agent_info',
    pointers: [WILD_CARD],
  },
  can: [CREATE],
};
export const RUNTIME_MESSAGES_READ_CAPABILITY: Capability = {
  with: {
    domain: RUNTIME_MESSAGES,
    pointers: [WILD_CARD],
  },
  can: [READ],
};
export const RUNTIME_MESSAGES_CREATE_CAPABILITY: Capability = {
  with: {
    domain: RUNTIME_MESSAGES,
    pointers: [WILD_CARD],
  },
  can: [CREATE],
};
export const RUNTIME_MESSAGES_SUBSCRIBE_CAPABILITY: Capability = {
  with: {
    domain: RUNTIME_MESSAGES,
    pointers: [WILD_CARD],
  },
  can: [SUBSCRIBE],
};
export const RUNTIME_QUIT_CAPABILITY: Capability = {
  with: {
    domain: RUNTIME,
    pointers: [WILD_CARD],
  },
  can: ['QUIT'],
};
export const RUNTIME_EXCEPTION_SUBSCRIBE_CAPABILITY: Capability = {
  with: {
    domain: 'runtime.exception',
    pointers: [WILD_CARD],
  },
  can: [SUBSCRIBE],
};

export const checkCapability = (capabilities: Capabilities, expected: Capability) => {
  const customCapMatch = (cap: Capability, expected: Capability) => {
    if (cap.with.domain !== WILD_CARD && cap.with.domain !== expected.with.domain) {
      return false;
    }

    if (
      !lodash.isEqual(cap.with.pointers, [WILD_CARD]) &&
      lodash.difference(expected.with.pointers, cap.with.pointers).length > 0
    ) {
      return false;
    }

    if (!lodash.isEqual(cap.can, [WILD_CARD]) && lodash.difference(expected.can, cap.can).length > 0) {
      return false;
    }

    return true;
  };

  if (!lodash.find(capabilities, cap => lodash.isEqualWith(cap, expected, customCapMatch))) {
    throw Error(
      `Capability is not matched, you have capabilities: ${JSON.stringify(capabilities)}, expected: ${JSON.stringify(
        expected
      )}`
    );
  }
};
