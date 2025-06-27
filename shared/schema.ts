import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  technologies: text("technologies").array().notNull(),
  liveUrl: text("live_url"),
  sourceUrl: text("source_url"),
  type: text("type").notNull(),
  availability: text("availability").notNull(),
});

export const workExperience = pgTable("work_experience", {
  id: serial("id").primaryKey(),
  company: text("company").notNull(),
  position: text("position").notNull(),
  startDate: text("start_date").notNull(),
  endDate: text("end_date"),
  description: text("description").notNull(),
});

export const education = pgTable("education", {
  id: serial("id").primaryKey(),
  institution: text("institution").notNull(),
  degree: text("degree").notNull(),
  startDate: text("start_date").notNull(),
  endDate: text("end_date"),
  description: text("description").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertProjectSchema = createInsertSchema(projects).omit({
  id: true,
});

export const insertWorkExperienceSchema = createInsertSchema(workExperience).omit({
  id: true,
});

export const insertEducationSchema = createInsertSchema(education).omit({
  id: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type Project = typeof projects.$inferSelect;
export type WorkExperience = typeof workExperience.$inferSelect;
export type Education = typeof education.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type InsertWorkExperience = z.infer<typeof insertWorkExperienceSchema>;
export type InsertEducation = z.infer<typeof insertEducationSchema>;
