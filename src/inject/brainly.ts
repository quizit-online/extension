async function counter() {
  try {
    const lastAccess = localStorage.getItem("flexible-funnel-last-access-data");
    if (lastAccess) {
      const data = JSON.parse(lastAccess);
      if (data.status === "denied") {
        const { solutionsUnlocked } = await chrome.storage.local.get(
          "solutionsUnlocked"
        );

        chrome.storage.local.set({ solutionsUnlocked: solutionsUnlocked + 1 });
      }
    }
  } catch (err) {
    console.error(err);
  }
}

async function main() {
  await counter();

  localStorage.removeItem("flexible-funnel-previews");
}

main();
