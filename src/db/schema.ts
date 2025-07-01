import {
  text,
  uuid,
  index,
  unique,
  boolean,
  pgTable,
  timestamp,
} from "drizzle-orm/pg-core";

export const verification = pgTable("verification", {
  id: uuid("id").primaryKey().defaultRandom(),
  value: text("value").notNull(),
  identifier: text("identifier").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").$defaultFn(
    () => /* @__PURE__ */ new Date()
  ),
  updatedAt: timestamp("updated_at").$defaultFn(
    () => /* @__PURE__ */ new Date()
  ),
});

export const verificationIdentifierIdx = index(
  "verification_identifier_idx"
).on(verification.identifier);

export const user = pgTable("user", {
  id: uuid("id").primaryKey().defaultRandom(),
  image: text("image"),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified")
    .$defaultFn(() => false)
    .notNull(),
  createdAt: timestamp("created_at")
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
  updatedAt: timestamp("updated_at")
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const session = pgTable("session", {
  id: uuid("id").primaryKey().defaultRandom(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  token: text("token").notNull().unique(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at")
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
  updatedAt: timestamp("updated_at")
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
  userId: uuid("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
});

export const sessionTokenIdx = index("session_token_idx").on(session.token);

export const account = pgTable(
  "account",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    scope: text("scope"),
    idToken: text("id_token"),
    password: text("password"),
    accessToken: text("access_token"),
    refreshToken: text("refresh_token"),
    accountId: text("account_id").notNull(),
    providerId: text("provider_id").notNull(),
    accessTokenExpiresAt: timestamp("access_token_expires_at"),
    refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
    createdAt: timestamp("created_at")
      .$defaultFn(() => /* @__PURE__ */ new Date())
      .notNull(),
    updatedAt: timestamp("updated_at")
      .$defaultFn(() => /* @__PURE__ */ new Date())
      .notNull(),
    userId: uuid("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
  },
  (table) => ({
    userProviderUnique: unique().on(table.userId, table.providerId),
  })
);
