import { Module, DefaultContext, getWriteNDK, OutboxService, requiredEnvVar } from '@lawallet/module';
import { PrismaClient } from '@prisma/client';

type Context = DefaultContext & {prisma: PrismaClient};

const context: Context = {
  outbox: new OutboxService(getWriteNDK()),
  prisma: new PrismaClient(),
};

const module = Module.build<Context>({
    context,
    nostrPath: `${import.meta.dirname}/nostr`,
    port: Number(requiredEnvVar('PORT')),
    restPath: `${import.meta.dirname}/rest`,
});

module.start();
