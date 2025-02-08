import { supabase } from "../config/database";

export async function filterContent(content: string): Promise<string> {
  try {
    // Fetch Halal compliance rules from the database
    const { data: rules, error } = await supabase.from("halal_compliance_rules").select("*");

    if (error) {
      console.error("⚠️ Error fetching compliance rules:", error);
      throw new Error("Failed to fetch compliance rules.");
    }

    if (!rules || rules.length === 0) {
      console.warn("⚠️ No compliance rules found. Returning unfiltered content.");
      return content; // If no rules exist, return the original content.
    }

    // Apply each rule to the content
    let filteredContent = content;
    for (const rule of rules) {
      if (rule.pattern && rule.replacement !== undefined) {
        filteredContent = applyRule(filteredContent, rule);
      }
    }

    return filteredContent;
  } catch (error) {
    console.error("❌ Error filtering content:", error);
    throw new Error("Content filtering failed.");
  }
}

function applyRule(content: string, rule: { pattern: string; replacement: string }): string {
  try {
    const regex = new RegExp(rule.pattern, "gi");
    return content.replace(regex, rule.replacement);
  } catch (error) {
    console.error("⚠️ Error applying rule:", rule, error);
    return content; // Return unchanged content if regex fails
  }
}