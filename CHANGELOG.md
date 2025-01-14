## [1.5.1](https://sqbu-github.cisco.com/CPaaS/ts-sdp/compare/v1.5.0...v1.5.1) (2022-07-12)


### Bug Fixes

* add missing direction and extension attributes to ExtMapLine ([#14](https://sqbu-github.cisco.com/CPaaS/ts-sdp/issues/14)) ([23a816d](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/23a816d41beac16585ecb05cd3f7bee3a840b210))

# [1.5.0](https://sqbu-github.cisco.com/CPaaS/ts-sdp/compare/v1.4.0...v1.5.0) (2022-07-12)


### Features

* add support for a=simulcast line ([#12](https://sqbu-github.cisco.com/CPaaS/ts-sdp/issues/12)) ([88776c5](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/88776c55e9010077f82bb6cb7ec37170c1dbf59d))

# [1.4.0](https://sqbu-github.cisco.com/CPaaS/ts-sdp/compare/v1.3.0...v1.4.0) (2022-07-11)


### Features

* add support for candidate lines ([#13](https://sqbu-github.cisco.com/CPaaS/ts-sdp/issues/13)) ([3ce7585](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/3ce7585e0a091230bd8fbdb96f08ba3790a04cd5))

# [1.3.0](https://sqbu-github.cisco.com/CPaaS/ts-sdp/compare/v1.2.0...v1.3.0) (2022-07-08)


### Features

* add support for rid lines ([#11](https://sqbu-github.cisco.com/CPaaS/ts-sdp/issues/11)) ([6664641](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/6664641e5adfd923ff34fb64d5f1faa349eb5c95))

# [1.2.0](https://sqbu-github.cisco.com/CPaaS/ts-sdp/compare/v1.1.2...v1.2.0) (2022-07-07)


### Features

* add API to search other lines for a given type ([#10](https://sqbu-github.cisco.com/CPaaS/ts-sdp/issues/10)) ([1b814fc](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/1b814fced054811d17e3a3e57956dd916b23fc38))

## [1.1.2](https://sqbu-github.cisco.com/CPaaS/ts-sdp/compare/v1.1.1...v1.1.2) (2022-07-06)


### Bug Fixes

* update node version to use v16 ([#9](https://sqbu-github.cisco.com/CPaaS/ts-sdp/issues/9)) ([89d4203](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/89d4203c4b8f3b0e18933b3759594fda5f34529a))

## [1.1.1](https://sqbu-github.cisco.com/CPaaS/ts-sdp/compare/v1.1.0...v1.1.1) (2022-07-05)


### Bug Fixes

* serialize content line ([#8](https://sqbu-github.cisco.com/CPaaS/ts-sdp/issues/8)) ([1aa8e99](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/1aa8e996d398011bdc89258ed43c52b2a1ab7f77))

# [1.1.0](https://sqbu-github.cisco.com/CPaaS/ts-sdp/compare/v1.0.2...v1.1.0) (2022-06-29)


### Features

* added support for content line ([#6](https://sqbu-github.cisco.com/CPaaS/ts-sdp/issues/6)) ([6ca4a68](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/6ca4a68afcc340740f492d87bbee68b3d7d3ffdf))

## [1.0.2](https://sqbu-github.cisco.com/CPaaS/ts-sdp/compare/v1.0.1...v1.0.2) (2022-06-23)


### Bug Fixes

* c-lines were only parsed at session level, not in media sections ([#4](https://sqbu-github.cisco.com/CPaaS/ts-sdp/issues/4)) ([6585333](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/6585333c32b03b3211b9fafaff3111ff713aa00e))

## [1.0.1](https://sqbu-github.cisco.com/CPaaS/ts-sdp/compare/v1.0.0...v1.0.1) (2022-06-21)


### Bug Fixes

* add missing exports ([24dafe2](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/24dafe22d430491ee26e95b7cba327bfdb6c76ab))

# 1.0.0 (2022-06-21)


### Bug Fixes

* add newline after last line of sdp ([b79f908](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/b79f9083e02b2ef4f889f3b9529facddf7b40807))
* add session-information-line, fix some line ordering issues in session description ([919acdb](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/919acdb530701ebd3f0c67dd12541c0c8aef114a))
* fix storing/serializing of unknown lines ([0c9f540](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/0c9f540f412798439154eafd39f49403cef66a15))
* parse origin line session id as string ([3d5d9a7](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/3d5d9a725e63a12a477014a635df80a23420257d))
* remove explicit order of 'other line' connection field, it was causing duplication ([f88252c](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/f88252ce12ea290db6a37b5232168e2c53afa376))
* session description line ordering issues ([3ab3285](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/3ab3285987f4653b0798d05e09c14df460f2b4c4))


### Features

* add fingerprint ([6cc23f9](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/6cc23f90efeca9e7910e5a377b2422e80e82b3b5))
* add ice-pwd ([8788445](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/87884451d4e520a5c6b54fafc2120a649bca3c77))
* add rtcp-mux ([6095168](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/6095168e0a9082f64ec25652bcc46666bf7ca570))
* add setup line ([2f6d815](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/2f6d81553c365d1019b9025d387938f9b61bb245))
* add some munging helper functions ([b9c78ac](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/b9c78ac0725cce00a02160aa82ee2b9ac72ecd81))
* add support for extmap ([f71d45a](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/f71d45a8e78f349edc44604ac6d2ca3d9b2f3154))
* add support for ice-ufrag ([a440930](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/a440930cc18d5ffc81603da7f4b1b4cd3cee687a))
* add support for mid ([4952888](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/4952888a29eee10c25b65516d795c57a3a3323dd))
* helper to retrieve audio/video media blocks ([1b41ab0](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/1b41ab0f2748f64478d249ff107608046d3aa86a))
* implement bandwidth line ([9324692](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/9324692934a3e4a3d65431acae54055e75489355))
* max-message-size ([79b411c](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/79b411c43e21d0aab97c952024c36d907bc5a114))
* sctp-port ([57057d4](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/57057d4c9f156449952311afe6922d0b22e7ef94))
* split up media info types to handle a/v vs application ([d515c6b](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/d515c6b0b38c6f8e84815834810d6312d51d00c3))
* support bundle group line ([f1e13cb](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/f1e13cb67bc215d15154184b71fce4d400da70df))
* support session name line ([d5f05d7](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/d5f05d7998f309ef5e721c6a3d22a1eff903a810))
* timing line ([47dfc04](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/47dfc04d65eb0d38580dcd84f5cf2f2377eff49b))

# 1.0.0 (2022-06-21)


### Bug Fixes

* add newline after last line of sdp ([b79f908](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/b79f9083e02b2ef4f889f3b9529facddf7b40807))
* add session-information-line, fix some line ordering issues in session description ([919acdb](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/919acdb530701ebd3f0c67dd12541c0c8aef114a))
* fix storing/serializing of unknown lines ([0c9f540](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/0c9f540f412798439154eafd39f49403cef66a15))
* parse origin line session id as string ([3d5d9a7](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/3d5d9a725e63a12a477014a635df80a23420257d))
* remove explicit order of 'other line' connection field, it was causing duplication ([f88252c](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/f88252ce12ea290db6a37b5232168e2c53afa376))
* session description line ordering issues ([3ab3285](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/3ab3285987f4653b0798d05e09c14df460f2b4c4))


### Features

* add fingerprint ([6cc23f9](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/6cc23f90efeca9e7910e5a377b2422e80e82b3b5))
* add ice-pwd ([8788445](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/87884451d4e520a5c6b54fafc2120a649bca3c77))
* add rtcp-mux ([6095168](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/6095168e0a9082f64ec25652bcc46666bf7ca570))
* add setup line ([2f6d815](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/2f6d81553c365d1019b9025d387938f9b61bb245))
* add some munging helper functions ([b9c78ac](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/b9c78ac0725cce00a02160aa82ee2b9ac72ecd81))
* add support for extmap ([f71d45a](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/f71d45a8e78f349edc44604ac6d2ca3d9b2f3154))
* add support for ice-ufrag ([a440930](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/a440930cc18d5ffc81603da7f4b1b4cd3cee687a))
* add support for mid ([4952888](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/4952888a29eee10c25b65516d795c57a3a3323dd))
* helper to retrieve audio/video media blocks ([1b41ab0](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/1b41ab0f2748f64478d249ff107608046d3aa86a))
* implement bandwidth line ([9324692](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/9324692934a3e4a3d65431acae54055e75489355))
* max-message-size ([79b411c](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/79b411c43e21d0aab97c952024c36d907bc5a114))
* sctp-port ([57057d4](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/57057d4c9f156449952311afe6922d0b22e7ef94))
* split up media info types to handle a/v vs application ([d515c6b](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/d515c6b0b38c6f8e84815834810d6312d51d00c3))
* support bundle group line ([f1e13cb](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/f1e13cb67bc215d15154184b71fce4d400da70df))
* support session name line ([d5f05d7](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/d5f05d7998f309ef5e721c6a3d22a1eff903a810))
* timing line ([47dfc04](https://sqbu-github.cisco.com/CPaaS/ts-sdp/commit/47dfc04d65eb0d38580dcd84f5cf2f2377eff49b))
